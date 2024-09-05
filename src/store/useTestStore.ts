
import create from "zustand";

export interface Test {
  id: number;
  name: string;
  enabled: boolean;
}

interface TestState {
  tests: Test[];
  toggleTest: (id: number) => void;
  setTests: (newTests: Test[]) => void;
  getEnabledCount: () => number;
}

const useTestStore = create<TestState>((set, get) => {
  const loadTests = (): Test[] => {
    const savedTests = localStorage.getItem("tests");
    return savedTests
      ? JSON.parse(savedTests)
      : Array.from({ length: 20 }, (_, index) => ({
          id: index + 1,
          name: `${index + 1}`,
          enabled: false,
        }));
  };

  const saveTests = (tests: Test[]) => {
    localStorage.setItem("tests", JSON.stringify(tests));
  };

  return {
    tests: loadTests(),
    toggleTest: (id: number) =>
      set((state) => {
        const updatedTests = state.tests.map((test) =>
          test.id === id ? { ...test, enabled: !test.enabled } : test
        );
        saveTests(updatedTests);
        return { tests: updatedTests };
      }),
    setTests: (newTests: Test[]) => {
      saveTests(newTests);
      set({ tests: newTests });
    },
    getEnabledCount: () => {
      const { tests } = get();
      return tests.filter((test) => test.enabled).length;
    },
  };
});

export default useTestStore;
