import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'
export function App(){
    return(
        <>
            <TwitterFollowCard username="netflixES" name="Netflix España" isFollowing={true}/>
            <TwitterFollowCard username="midudev" name="Miguel Ángel Durán" isFollowing={false}/>
        </>

    )
}