import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);
        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setloading(false);
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex justify-center w-full mb-8">
                <ImageUpload UploadImageHandler={UploadImageHandler} />
            </div>
            <div className="flex justify-center w-full">
                <ImagePreview
                    loading={loading}
                    uploaded={uploadImage}
                    enhanced={enhancedImage?.image}
                />
            </div>
        </div>
    );
};

export default Home;
