import prisma from "../lib/prisma";


export const createProfile = async (data: any) => {
  return await prisma.profile.create({ data });
};

export const getAllProfiles = async () => {
  return await prisma.profile.findMany();
};

export const getProfileById = async (id: string) => {
  return await prisma.profile.findUnique({
    where: { id },
  });
};

export const updateProfile = async (id: string, data: any) => {
  return await prisma.profile.update({
    where: { id },
    data,
  });
};

export const deleteProfile = async (id: string) => {
  return await prisma.profile.delete({
    where: { id },
  });
};