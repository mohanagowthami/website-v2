// use server

interface formDataType {
    name: string,
    mobileNumber: string,
    emailId: string,
    highestGraduation: string,
    startDateTimeStamp: string,
    endDateTimeStamp: string,
    referralCode: string




}



export const contactFormSubmission = async (formData: formDataType) => {
    try {




        const response = await fetch(
            "https://builder.io/api/v1/write/enquiry",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer bpk-cf9700e79008490691896874cb985fe9",
                },
                body: JSON.stringify({
                    name: formData?.name,
                    published: "published",
                    data: {
                        name: formData?.name,
                        phonenumber: formData?.mobileNumber,
                        email: formData?.emailId,
                        highestgraduation: formData?.highestGraduation,
                        graduationStartDate: formData?.startDateTimeStamp,
                        graduationEndDate: formData?.endDateTimeStamp,
                        referralCode: formData.referralCode,
                    },
                }),
            }
        )


        if (response?.ok) {
            return { success: true, message: "Successfully submitted data" }
        }
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    catch (error: any) {
        console.log(error)

        return { success: false, message: "Something went wrong, please try again!" }

    }
}