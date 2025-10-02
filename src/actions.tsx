"use server";

export const shareActions= async (formData:FormData)=>{
    const file= formData.get("file") as File;
    const desc= formData.get("desc") as string;

    console.log(file, desc);

}