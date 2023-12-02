import React, { useState } from 'react';
import './SignUp.css';

const PasswordReset = ({ cancel }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isResetSuccessful, setIsResetSuccessful] = useState(false);

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setIsPasswordMatch(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsPasswordMatch(true);
  };

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      setIsResetSuccessful(true);
    } else {
      setIsPasswordMatch(false);
    }
  };

  return (
    <div className='container'>
      <div className='text'>Password Reset</div>
      <div className='inputs'>
        <div className='input'>
          <input
            className='input-field'
            type='password'
            placeholder='Create new Password'
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>

        <div className='input'>
          <input
            className='input-field'
            type='password'
            placeholder='Confirm Your Password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!isPasswordMatch && (
            <div style={{ color: 'red' }}>Passwords do not match.</div>
          )}
        </div>

        <div className='submit-container'>
          <button className='submit btn' onClick={cancel}>
            Cancel
          </button>
          <button className='submit btn' onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {isResetSuccessful && (
          <div style={{ color: 'green' }}>Password reset successful!</div>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
