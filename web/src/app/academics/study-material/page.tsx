"use client";
import { useState, useEffect } from "react";

const StudyMaterial = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [branches, setBranches] = useState<string[]>([]);
  const [semesters, setSemesters] = useState<string[]>([]);

  const branchOptions: Record<string, string[]> = {
    btech: ['Civil', 'Computer Science and Engineering', 'Mechanical', 'Electrical', 'Electronics', 'Chemical'],
    mtech: ['Structural Engineering', 'Computer Science and Engineering', 'Thermal Engineering', 'Power Systems'],
  };

  const semesterOptions: Record<string, string[]> = {
    btech: Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`),
    mtech: Array.from({ length: 4 }, (_, i) => `Semester ${i + 1}`),
  };

  useEffect(() => {
    if (selectedCourse) {
      setBranches(branchOptions[selectedCourse]);
      setSelectedBranch(''); // Reset branch when course changes
      setSemesters([]); // Reset semesters when course changes
      setSelectedSemester(''); // Reset semester when course changes
    } else {
      setBranches([]);
      setSemesters([]);
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedBranch && selectedCourse) {
      setSemesters(semesterOptions[selectedCourse]);
    } else {
      setSemesters([]);
      setSelectedSemester(''); // Reset semester when branch changes
    }
  }, [selectedBranch, selectedCourse]);

  const allSelected = selectedCourse && selectedBranch && selectedSemester;

  return (
    <section className="flex flex-col gap-5 px-11 my-5">
      <h1 className="text-3xl uppercase font-semibold">Study Material</h1>
      
      <div className="flex flex-col items-start gap-10 my-10">
        <select
          name="course"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Course</option>
          <option value="btech">B.Tech</option>
          <option value="mtech">M.Tech</option>
        </select>

        {branches.length > 0 && (
          <select
            name="branch"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        )}

        {semesters.length > 0 && (
          <select
            name="semester"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Semester</option>
            {semesters.map((semester, index) => (
              <option key={index} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        )}

        {allSelected && (
          <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Show Details
          </button>
        )}
      </div>
    </section>
  );
};

export default StudyMaterial;
