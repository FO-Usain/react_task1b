const BoardRow = ({item}) => {
    return (
        <div className="boardRow realRow" key={item.id}>
            <div className="col1 realCol1">
                <div className="col11">{`0${item.id}`}</div>
                <div className="col12"><span className="postFrame"><img src={item.postSrc} alt="" /></span></div>
                <div className="col13">{item.text}</div>
            </div>
            <div className="col2 realCol2">
                <span className="authorFrame"><img src={item.authorSrc} alt="" /></span>
                <p className="authorName">{item.authorName}</p>
            </div>
            <div className="col3 realCol3">
                <p className="rank">{item.rank}</p>
                <span className="arrowFrame"><img src="/media/images/upArrow.png" alt="" /></span>
            </div>
        </div>
    );
}
 
export default BoardRow;