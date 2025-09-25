import { BASE_URL } from "@/config/api";
// Fetch all courses
// export async function fetchCourses(search?: string) {
//   try {
//     const params: Record<string, string> = {};
//     if (search) params.search = search;

//     const { data } = await BASE_URL.get("course/", { params });
//     return data;
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     return [];
//   }
// }
export async function fetchCourses(search?: string) {
  try {
    const params: Record<string, string> = {};
    if (search) params.search = search;

    const { data } = await BASE_URL.get("course/", { params });

    // Normalize whether it's wrapped or direct
    const courses = Array.isArray(data)
      ? data
      : data?.courses || data?.data || [];

    return courses.map((course: any) => ({
      ...course,
      id: course._id, // ✅ always available now
    }));
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

// Fetch specific courses

// Fetch specific courses
export async function getCourseById(id: string) {
  try {
    const response = await BASE_URL.get(`/course/${id}`);
    const course = response.data;

    if (!course) return null;

    return {
      ...course,
      id: course._id,
    };
  } catch (error: any) {
    console.error("Error fetching course:", error);
    throw error;
  }
}
