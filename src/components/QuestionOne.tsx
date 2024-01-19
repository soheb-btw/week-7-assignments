import { useEffect, useState } from 'react'
import './QuestionOne.css'
import axios from 'axios';

interface Social {
    followers: number,
    public_repos: number,
    following: number
}

export function QuestionOne() {

    return <div className='center'>
        <UserDetails></UserDetails>
    </div>
}

function UserDetails() {
    const [value, setValue] = useState<Social>({ followers: 0, public_repos: 0, following: 0 });
    const [count, setCount] = useState(3);

    function fetch() {
        // setInterval(() => {
            axios.get(`https://api.github.com/users/${count}`).then((response) => {
                setValue(response.data);
                setCount(prevCount => prevCount + 1);
            });
        // }, 5000)
    }

    useEffect(() => {
        fetch();
    }, [])
    return <div>
        <div className="wrapper">
            <div className='name-age'>
                <span className='name'>Rita Corrier</span>
                <span className='age'>32</span>
            </div>
            <div className='city'>London</div>
            <div className='social'>
                <span className='followers'>{value.followers} follwers</span>
                <span className='likes'>{value.following} likes</span>
                <span className='photos'>{value.public_repos} photos</span>
            </div>
        </div>
    </div>
}


// import './QuestionOne.css';

// export function QuestionOne() {
//   return (
//     <div className="center">
//       <div className="card">
//         <div className="name-age">
//           <span className="name">Rita Corrier</span>
//           <span className="age">32</span>
//         </div>
//         <div className="city">London</div>
//         <div className="social">
//           <span className="followers">80K followers</span>
//           <span className="likes">803K likes</span>
//           <span className="photos">1.4K photos</span>
//         </div>
//       </div>
//     </div>
//   );
// }
