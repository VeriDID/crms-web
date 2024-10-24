// useStudentStore.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import useStudentStore from '../students.store';

// Reset the store before each test
beforeEach(() => {
  const reset = useStudentStore.getState().removeAllStudents;
  reset();
});

describe('useStudentStore', () => {
  it('should initialize with 0 students', () => {
    const { students } = useStudentStore.getState();
    expect(students).toBe(0);
  });

  it('should increase students by 1', () => {
    const { increaseStudents } = useStudentStore.getState();
    increaseStudents();
    const { students } = useStudentStore.getState();
    expect(students).toBe(1);
  });

  it('should remove all students', () => {
    const { increaseStudents, removeAllStudents } = useStudentStore.getState();
    increaseStudents();
    increaseStudents();
    removeAllStudents();
    const { students } = useStudentStore.getState();
    expect(students).toBe(0);
  });

  it('should update students to a specific number', () => {
    const { updateStudents } = useStudentStore.getState();
    updateStudents(5);
    const { students } = useStudentStore.getState();
    expect(students).toBe(5);
  });
});
