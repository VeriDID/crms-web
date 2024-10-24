import * as React from 'react';
import useStudentStore from '@/stores/students.store';
import { useTranslation } from 'react-i18next';
import type { PageProps } from 'gatsby';

const Students: React.FC<Partial<PageProps>> = () => {
  const { t } = useTranslation();
  const { students, increaseStudents, removeAllStudents, updateStudents } =
    useStudentStore();
  return (
    <>
      <h2>Zustand</h2>
      <button
        onClick={increaseStudents}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Increase Students
      </button>
      <button
        onClick={removeAllStudents}
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Remove All Students
      </button>
      <button
        onClick={() => updateStudents(10)}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Update Students to 10
      </button>
      <h2>{`${t('numberOfStudents')}: ${students}`}</h2>
    </>
  );
};

export default Students;
