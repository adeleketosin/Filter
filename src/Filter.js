// import Header from './Header';
import photosnap from './static-job-listings-master/images/photosnap.svg';
// import manage from './static-job-listings-master/images/manage.svg';
// import account from './static-job-listings-master/images/account.svg';
// import myhome from './static-job-listings-master/images/myhome.svg';
// import loopstudios from './static-job-listings-master/images/loopstudios.svg';
// import faceit from './static-job-listings-master/images/faceit.svg';
// import shortly from './static-job-listings-master/images/shortly.svg';
// import insure from './static-job-listings-master/images/insure.svg';
// import eyecamco from './static-job-listings-master/images/eyecamco.svg';
// import theairfiltercompany from './static-job-listings-master/images/theairfiltercompany.svg';

function Filter(list) {
    return (
        <div className="container">
            <div className="sub">
                <div className="img">
                    <img src={photosnap} />
                </div>
                <div className="text">
                    <div className="first">
                        <div className="photo">{list.company}</div>
                        {list.new ? <div className="new"> NEW </div> : ""}
                        {list.featured ? <div className="featured"> FEATURED </div> : ""}
                    </div>
                    <div className="position">{list.position}</div>
                    <div className="days">
                        <div className="post">{list.postedAt}</div>
                        <span className="dot"></span>
                        <div className="contract">{list.contract}</div>
                        <span className="dot"></span>
                        <div className="location">{list.location}</div>
                    </div>
                    <div className="side-div">
                        <div  className="languages">{list.role}</div>
                        <div className="languages">{list.level}</div>
                        {list.languages.map((data) => (<button className="tools">{data}</button>))}
                        {list.tools.map((data) => (<button className="tools">{data}</button>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;

{/* <img src={photosnap} />
<img src={manage} />
<img src={account} />
<img src={myhome} />
<img src={loopstudios} />
<img src={faceit} />
<img src={shortly} />
<img src={eyecamco} />
<img src={theairfiltercompany} /> */}