import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'johndoe',
        userImg: 'https://links.papareact.com/jjm',
        img: 'https://links.papareact.com/ocw',
        caption: 'A caption',
    },
    {
        id: '124',
        username: 'johndoe',
        userImg: 'https://links.papareact.com/jjm',
        img: 'https://links.papareact.com/ocw',
        caption: 'A caption',
    },
    {
        id: '125',
        username: 'johndoe',
        userImg: 'https://links.papareact.com/jjm',
        img: 'https://links.papareact.com/ocw',
        caption: 'A caption',
    },
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts