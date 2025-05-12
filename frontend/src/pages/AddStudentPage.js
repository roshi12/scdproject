import React from 'react';
import StudentForm from '../components/StudentForm';
import { ArrowLeft } from 'lucide-react';

const AddStudentPage = () => {
  return (
    <div className="min-h-screen bg-[#f3efe7] flex items-center justify-center relative overflow-hidden px-4">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#fdc3c3] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-[350px] h-[350px] bg-[#b38cb4] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse delay-200"></div>
      <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-[#f4e04d] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse delay-300"></div>

      {/* Main card */}
      <div className="relative bg-white rounded-3xl shadow-xl w-full max-w-md px-8 py-10 z-10">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 text-gray-700 hover:text-black transition"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome</h1>
          <p className="text-sm text-gray-500">Enter student details below</p>
        </div>

        {/* Form */}
        <StudentForm />
      </div>
    </div>
  );
};

export default AddStudentPage;
