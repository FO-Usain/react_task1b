import { useEffect } from "react";
import { useContext } from "react";
import { updateVideosPage } from "../../stateManagement/actions/actionCreators/Global";
import { GlobalContext } from "../../stateManagement/contexts/GlobalContext";
import MkdSDK from "../../utils/MkdSDK";
import "./Videos.css";

const sdk = new MkdSDK();

const Videos = () => {

    const { state, dispatch } = useContext(GlobalContext);


    const getNextVideoPage = () => {
        const page = state.videosPage + 1;

        const videos = sdk.getVideoPage(page);

        videos.then(videos => {
            dispatch(updateVideosPage(videos.list, page));
        }).catch(error => {

        });
    };

    const getPrevVideoPage = () => {
        const page = state.videosPage > 1 ? state.videosPage - 1 : 1;

        const videos = sdk.getVideoPage(page);

        videos.then(videos => {
            dispatch(updateVideosPage(videos.list, page));
        }).catch(error => {

        });
    };

    useEffect(() => {
        const videos = sdk.getVideoPage(1);

        videos.then(videos => {
            console.log(JSON.stringify(videos.list))
            dispatch(updateVideosPage(videos.list, 1));
        }).catch(error => {
            console.log("Error: ", error);
        })
    }, []);

    return (
        <div className="videosContainer">
            <div className="videosList">
                <div className="videosTable">
                    {JSON.stringify(state.videos)}
                </div>
                <div className="videosNav">
                    <div
                        className="videoNext"
                        onClick={() => {
                            getNextVideoPage()
                        }}
                    >Next</div>
                    <div
                        className="videPrev"
                        onClick={() => {
                            getPrevVideoPage()
                        }}
                    >Prev</div>
                </div>
            </div>
        </div>
    );
}

export default Videos;