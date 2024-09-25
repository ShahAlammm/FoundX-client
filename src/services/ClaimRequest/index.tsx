"use server";

import AxiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (
    claimRequest: FieldValues
): Promise<any> => {
    try {
        const res = await AxiosInstance.post("/claim-request", claimRequest);

        return res.data;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getReceivedClaimRequest = async () => {
    try {
        const res = await AxiosInstance.get(
            "/claim-request/received-claim-request"
        );

        return res.data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw new Error("Failed to fetch data");
    }
};