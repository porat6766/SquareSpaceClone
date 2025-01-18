import { siteClient } from "../lib/api";
import { ApiResponse } from "../types/generalTypes";
import { ISite } from "../types/siteTypes";

export const createSite = async (
  siteData: ISite
): Promise<ApiResponse<ISite>> => {
  try {
    const response = await siteClient.post<ApiResponse<ISite>>(
      "/create",
      siteData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating site:", error);
    throw error;
  }
};

export const fetchAllSites = async (): Promise<ApiResponse<ISite[]>> => {
  try {
    const response = await siteClient.get<ApiResponse<ISite[]>>("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching all sites:", error);
    throw error;
  }
};

export const fetchSiteById = async (
  siteId: string
): Promise<ApiResponse<ISite>> => {
  try {
    const response = await siteClient.get<ApiResponse<ISite>>(`/${siteId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching site by ID:", error);
    throw error;
  }
};

export const fetchUserSites = async (): Promise<ApiResponse<ISite[]>> => {
  try {
    const response = await siteClient.get<ApiResponse<ISite[]>>("/user/sites");
    return response.data;
  } catch (error) {
    console.error("Error fetching user sites:", error);
    throw error;
  }
};

export const updateSite = async (
  siteId: string,
  updatedData: Partial<ISite>
): Promise<ApiResponse<ISite>> => {
  try {
    console.log("siteId:", siteId);
    console.log("updatedData:", updatedData);

    const response = await siteClient.put<ApiResponse<ISite>>(
      `/${siteId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating site:", error);
    throw error;
  }
};

export const deleteSite = async (
  siteId: string
): Promise<ApiResponse<{ message: string }>> => {
  try {
    console.log(siteId);

    const response = await siteClient.delete<ApiResponse<{ message: string }>>(
      `/${siteId}`
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error deleting site:", error);
    throw error;
  }
};
