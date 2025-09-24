import { BASE_URL } from "@/config/api";

export async function fetchCourses(search?: string) {
  try {
    const params: Record<string, string> = {};
    if (search) params.search = search;

    const { data } = await BASE_URL.get("course/", { params });
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}
