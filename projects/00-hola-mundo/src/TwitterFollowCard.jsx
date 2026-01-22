export function TwitterFollowCard({ username, name, isFollowing }) {
    const imgSrc = `https://unavatar.io/${username}`
    return (
        <article>
            <header>
                <img alt = "Netflix Account Avatar" src = {imgSrc}  />
                <div>
                    <strong>{name}</strong>
                    <span>{username}</span>
                </div>
            </header>
            <aside>
            <button>
                Seguir
            </button>
            </aside>
        </article>
    )
}