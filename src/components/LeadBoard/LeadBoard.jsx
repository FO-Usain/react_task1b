import { useContext } from "react";
import { useEffect } from "react";
import { updateVideosPage } from "../../stateManagement/actions/actionCreators/Global";
import { GlobalContext } from "../../stateManagement/contexts/GlobalContext";
import MkdSDK from "../../utils/MkdSDK";
import BoardRow from "./BoardRow";
import "./LeadBoard.css"
import leadList from "./LeadList";

const sdk = new MkdSDK();


const LeadBoard = () => {
    const date = " 30 May 2022";
    const time = "11:34";

    const { state, dispatch } = useContext(GlobalContext);

    const getNextVideoPage = () => {
        const page = state.videosPage + 1;

        const videos = sdk.getVideoPage(page);

        videos.then(videos => {
            dispatch(updateVideosPage(videos.list, page));
        }).catch(error => {

        });
    };

    const getPrevVidePage = () => {
        const page = state.videosPage > 1 ? state.videosPage - 1 : 1;

        const videos = sdk.getVideoPage(page);

        videos.then(videos => {
            dispatch(updateVideosPage(videos.list, page));
        }).catch(error => {

        });
    }

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
        <div className="leadBoardContainer">
            <div className="leadBoardHeader">
                <h1 className="leadBoardTitle">Today's leadboard</h1>
                <div className="boardTiming">
                    <p className="timingDate">{date}</p>
                    <span className="timingPoint"></span>
                    <span className="submissionsOpen" >SUBMISSIONS OPEN</span>
                    <span className="timingPoint"></span>
                    <span className="timingTime">{time}</span>
                </div>
            </div>
            <div className="leadBoardLabels boardRow">
                <div className="col1 col">
                    <div className="col11 fakeCol11">#</div>
                    <div className="col12">Title</div>
                </div>
                <div className="col2 col">Author</div>
                <div className="col3 col label3">
                    <p className="mostLiked">Most Liked</p>
                    <span className="optionsFrame"><img src="/media/images/options.png" alt="" /></span>
                </div>
            </div>
            <div className="leadListContainer">
                {
                    leadList.map(leadItem => {
                        return <BoardRow item={leadItem} />
                    })
                }
            </div>
        </div>
    );
}

export default LeadBoard;