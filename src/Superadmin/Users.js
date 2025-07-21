import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newFullName, setNewFullName] = useState("");
    const [newMobile, setNewMobile] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5269/api/Users');
            console.log("Users API response:", res.data);
            setUsers(res.data.data || res.data || []);
        } catch (err) {
            console.error("User Fetch Error:", err);
            alert("Failed to fetch users. Please check if the server is running.");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddUser = async () => {
        if (newFullName.trim() && newMobile.trim() && newEmail.trim() && newPassword.trim()) {
            setLoading(true);
            
            const newUser = {
                fullName: newFullName.trim(),
                mobile: newMobile.trim(),
                email: newEmail.trim(),
                password: newPassword.trim(),
            };

            try {
                console.log("Sending user payload:", newUser);
                const response = await axios.post("http://localhost:5269/api/Users/signup", newUser, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                console.log("Response:", response);

                // Check for success - be more flexible with response checking
                if (response.status === 200 || response.status === 201 || response.data.status === "201") {
                    try {
                        await fetchUsers();
                        
                        // Clear form and close modal
                        setNewFullName("");
                        setNewEmail("");
                        setNewMobile("");
                        setNewPassword("");
                        setShowAddModal(false);
                        alert("User added successfully!");
                    } catch (fetchError) {
                        console.error("Error fetching updated users:", fetchError);
                        // Still close modal and clear form even if refetch fails
                        setNewFullName("");
                        setNewEmail("");
                        setNewMobile("");
                        setNewPassword("");
                        setShowAddModal(false);
                        alert("User added, but failed to refresh data. Please reload the page.");
                    }
                } else {
                    alert("Signup failed: " + (response.data.message || "Unknown error"));
                }
            } catch (error) {
                console.error("Error adding user:", error);
                
                // More detailed error handling
                if (error.response) {
                    // Server responded with error status
                    const errorMsg = error.response.data?.message || error.response.data || "Unknown server error";
                    alert(`Signup failed: ${errorMsg} (Status: ${error.response.status})`);
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
            alert("Please fill all fields.");
        }
    };

    const handleDownload = () => {
        if (users.length === 0) {
            alert("No users to export.");
            return;
        }

        const headers = ["ID", "Full Name", "Mobile", "Email"];

        const rows = users.map(user => [
            user.id || "",
            user.fullName || "",
            user.mobile || "",
            user.email || ""
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(row => row.map(value => `"${value}"`).join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", "users.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredUsers = (users || []).filter(user =>
        (user.fullName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.mobile || "").toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(filteredUsers.length / pageSize);

    return (
        <>
            <div className="container mt-4">
                <h2 className="text-muted">
                    <i className="bi bi-person-plus me-2 text-success"></i>Add Users
                </h2>

                <button 
                    className="btn btn-primary mb-3" 
                    onClick={() => setShowAddModal(true)}
                    disabled={loading}
                >
                    Add User
                </button>

                <div className="row g-2 mb-3 align-items-center">
                    <div className="col-md-4">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search users..." 
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
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map(user => (
                            <tr key={user.id || Math.random()}>
                                <td>{user.id || "N/A"}</td>
                                <td>{user.fullName || "N/A"}</td>
                                <td>{user.mobile || "N/A"}</td>
                                <td>{user.email || "N/A"}</td>
                            </tr>
                        ))}
                        {paginatedUsers.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    {searchTerm ? "No users found matching your search." : "No Users Found."}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button 
                                    className="page-link" 
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                            </li>
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
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button 
                                    className="page-link" 
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Modal */}
                {showAddModal && (
                    <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add User</h5>
                                    <button 
                                        type="button" 
                                        className="btn-close" 
                                        onClick={() => setShowAddModal(false)}
                                        disabled={loading}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Full Name" 
                                            value={newFullName} 
                                            onChange={(e) => setNewFullName(e.target.value)}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Mobile</label>
                                        <input 
                                            type="tel" 
                                            className="form-control" 
                                            placeholder="Enter Mobile Number" 
                                            value={newMobile} 
                                            onChange={(e) => setNewMobile(e.target.value)}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Enter Email Address" 
                                            value={newEmail} 
                                            onChange={(e) => setNewEmail(e.target.value)}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Enter Password" 
                                            value={newPassword} 
                                            onChange={(e) => setNewPassword(e.target.value)}
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
                                        onClick={handleAddUser}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                Adding...
                                            </>
                                        ) : (
                                            "Add User"
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
        </>
    );
}

export default Users;
