import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createSite,
  fetchAllSites,
  fetchSiteById,
  fetchUserSites,
  updateSite,
  deleteSite,
} from "../services/siteService";
import { ISite } from "../types/siteTypes";

export const useAllSites = () => {
  return useQuery({
    queryKey: ["allSites"],
    queryFn: fetchAllSites,
  });
};
// const { data: allSites, isLoading, error } = useAllSites();

export const useSiteById = (siteId: string) => {
  return useQuery({
    queryKey: ["siteById", siteId],
    queryFn: () => fetchSiteById(siteId),
    enabled: !!siteId,
  });
};
// const { data: site, isLoading, error } = useSiteById(siteId);

export const useUserSites = () => {
  return useQuery({
    queryKey: ["userSites"],
    queryFn: fetchUserSites,
  });
};
// const { data: userSites, isLoading, error } = useUserSites();

export const useCreateSite = ({ onSuccess }: any) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSite,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["allSites"] });
      queryClient.invalidateQueries({ queryKey: ["userSites"] });
      queryClient.invalidateQueries({
        queryKey: ["userProfile"],
      });
      if (onSuccess) onSuccess(data);
    },
  });
};

// const { mutate: createNewSite, isLoading, error } = useCreateSite();

export const useUpdateSite = ({ onSuccess }: any) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      siteId,
      updatedData,
    }: {
      siteId: string;
      updatedData: Partial<ISite>;
    }) => updateSite(siteId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allSites"] });
      queryClient.invalidateQueries({ queryKey: ["siteById"] });
      queryClient.invalidateQueries({ queryKey: ["userSites"] });
      queryClient.invalidateQueries({
        queryKey: ["userProfile"],
      });
      if (onSuccess) onSuccess();
    },
  });
};
// const { mutate: updateExistingSite, isLoading, error } = useUpdateSite();

export const useDeleteSite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (siteId: string) => deleteSite(siteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allSites"] });
      queryClient.invalidateQueries({ queryKey: ["userSites"] });
      queryClient.invalidateQueries({
        queryKey: ["userProfile"],
      });
    },
  });
};
// const { mutate: deleteExistingSite, isLoading, error } = useDeleteSite();
