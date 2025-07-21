import axios from "axios";
import { useEffect, useState } from "react";

function Userroles() {
    const [userroles, setUserRoles] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newuserId, setNewUserId] = useState("");
    const [newroleId, setNewRoleId] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [loading, setLoading] = useState(false);

    const handleAddUserRole = async () => {
        if (newuserId.trim() !== "" && newroleId.trim() !== "") {
            setLoading(true);
            
            const payload = {
                userId: parseInt(newuserId.trim()), // Convert to number if needed
                roleId: parseInt(newroleId.trim())  // Convert to number if needed
            };

            try {
                console.log("Sending payload:", payload);
                const res = await axios.post("http://localhost:5269/api/UserRoles", payload, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                console.log("Response:", res);

                // Check for success - be more flexible with response checking
                if (res.status === 200 || res.status === 201) {
                    // Refetch the latest user roles from the DB
                    try {
                        const updatedRes = await axios.get("http://localhost:5269/api/UserRoles");
                        setUserRoles(updatedRes.data.data || updatedRes.data || []);
                        
                        // Clear form and close modal
                        setNewUserId("");
                        setNewRoleId("");
                        setShowAddModal(false);
                        alert("User role assigned successfully!");
                    } catch (fetchError) {
                        console.error("Error fetching updated data:", fetchError);
                        // Still close modal and clear form even if refetch fails
                        setNewUserId("");
                        setNewRoleId("");
                        setShowAddModal(false);
                        alert("Role assigned, but failed to refresh data. Please reload the page.");
                    }
                } else {
                    alert("Failed to assign role. Server responded with status: " + res.status);
                }
            } catch (error) {
                console.error("Error assigning user role:", error);
                
                // More detailed error handling
                if (error.response) {
                    // Server responded with error status
                    const errorMsg = error.response.data?.message || error.response.data || "Unknown server error";
                    alert(`Error assigning user role: ${errorMsg} (Status: ${error.response.status})`);
                } else if (error.request) {
                    // Request was made but no response received
                    alert("Error: No response from server. Please check if the server is running.");
                } else {
                    // Something else happened
                    alert("Error: " + error.message);
                }
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please fill in all fields.");
        }
    };

    const handleDownload = () => {
        const headers = ["User ID", "Role ID", "Role Name"];

        const rows = userroles.map(role => [
            role.userId,
            role.roleId,
            role.roleName || ""
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(row => row.map(val => `"${val}"`).join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", "userroles.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredCountries = (userroles || []).filter(c =>
        String(c.roleId || "").toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedCountries = filteredCountries.slice(
        startIndex,
        startIndex + pageSize
    );

    const totalPages = Math.ceil(filteredCountries.length / pageSize);

    useEffect(() => {
        const fetchUserRoles = async () => {
            try {
                const res = await axios.get('http://localhost:5269/api/UserRoles');
                console.log("UserRoles API response:", res.data);
                setUserRoles(res.data.data || res.data || []);
            } catch (err) {
                console.error("API Error:", err);
                alert("Failed to fetch user roles. Please check if the server is running.");
            }
        };

        fetchUserRoles();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-muted">
                <i className="bi bi-person-lines-fill me-2 text-success"></i>
                Add User Roles
            </h2>
            <button 
                className="btn btn-primary mb-3" 
                onClick={() => setShowAddModal(true)}
            >
                Add UserRole
            </button>
            
            <div className="row g-2 mb-3 align-items-center">
                <div className="col-md-4">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search..." 
                        value={searchTerm} 
                        onChange={e => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <button 
                        className="btn btn-success" 
                        onClick={handleDownload} 
                        title="Download CSV"
                    >
                        <i className="bi bi-download"></i> Export
                    </button>
                </div>
                <div className="col-md-4 text-md-end">
                    <label className="form-label me-2 mb-0">Items per page:</label>
                    <select 
                        className="form-select d-inline-block w-auto" 
                        value={pageSize} 
                        onChange={e => {
                            setPageSize(parseInt(e.target.value)); 
                            setCurrentPage(1);
                        }}
                    >
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                </div>
            </div>
            
            <table className="table table-bordered table-striped">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Role ID</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedCountries.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.userId}</td>
                            <td>{c.roleId}</td>
                        </tr>
                    ))}
                    {paginatedCountries.length === 0 && (
                        <tr>
                            <td colSpan="3" className="text-center">No User Roles Found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                            <button 
                                className="page-link" 
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Modal */}
            {showAddModal && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add User Role</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowAddModal(false)}
                                    disabled={loading}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">User ID</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Enter User ID" 
                                        value={newuserId} 
                                        onChange={e => setNewUserId(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Role ID</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Enter Role ID" 
                                        value={newroleId} 
                                        onChange={e => setNewRoleId(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button 
                                    className="btn btn-secondary" 
                                    onClick={() => setShowAddModal(false)}
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button 
                                    className="btn btn-primary" 
                                    onClick={handleAddUserRole}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            Assigning...
                                        </>
                                    ) : (
                                        "Assign"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop */}
            {showAddModal && (
                <div 
                    className="modal-backdrop fade show" 
                    onClick={() => !loading && setShowAddModal(false)}
                ></div>
            )}
        </div>
    );
}

export default Userroles;