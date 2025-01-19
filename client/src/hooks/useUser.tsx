import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProfile,
  getUserByToken,
  updateUserProfile,
} from "../services/userService";
import { deleteToken } from "../lib/api";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserByToken(),
  });
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userProfile"],
      });
    },
  });
};

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProfile,
    onSuccess: () => {
      deleteToken();
      queryClient.invalidateQueries({
        queryKey: ["userProfile"],
      });
      window.location.href = "/";
    },
    onError: (error) => {
      console.error("Failed to delete profile:", error);
    },
  });
};
