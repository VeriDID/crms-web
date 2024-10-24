import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface StudentState {
  students: number;
  increaseStudents: () => void;
  removeAllStudents: () => void;
  updateStudents: (by: number) => void;
}

const useStudentStore = create<StudentState>()(
  devtools(
    (set) => ({
      students: 0,
      increaseStudents: () =>
        set((state) => ({ students: state.students + 1 })),
      removeAllStudents: () => set({ students: 0 }),
      updateStudents: (newStudents) => set({ students: newStudents }),
    }),
    {
      enabled: true, // enabled in dev-tool
      name: 'student store', // dev-tool
    },
  ),
);

export default useStudentStore;
