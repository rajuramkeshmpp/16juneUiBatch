import React, { useState } from 'react';

function FeedbackReport() {
  const feedbackList = [
    {
      email: 'rizwan@example.com',
      name: 'Rizwan Ahmad',
      feedback: 'Great platform for job seekers and companies alike!',
    },
    {
      email: 'shreya@example.com',
      name: 'Shreya Sharma',
      feedback: 'Very clean design and easy navigation. Loved it!',
    },
  ];

  const [selectedEmail, setSelectedEmail] = useState('');

  const selectedFeedback = feedbackList.find(fb => fb.email === selectedEmail);

  return (
    <div className="text-white">
      <h4 className="mb-4">Feedback Report</h4>

      <div className="mb-3">
        <label className="form-label">Select Email</label>
        <select
          className="form-select"
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
        >
          <option value="">-- Select Email --</option>
          {feedbackList.map(fb => (
            <option key={fb.email} value={fb.email}>{fb.email}</option>
          ))}
        </select>
      </div>

      {selectedFeedback && (
        <div className="card bg-secondary text-white mt-4">
          <div className="card-body">
            <h5 className="card-title">{selectedFeedback.name}</h5>
            <p className="card-text"><strong>Email:</strong> {selectedFeedback.email}</p>
            <p className="card-text"><strong>Feedback:</strong> {selectedFeedback.feedback}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackReport;
