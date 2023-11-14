import { useContext, useEffect, useRef } from "react"
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from '../../contexts/PostsProvider/actions'

export const Posts = () => {
    const isMounted = useRef(true);
    const postsContext = useContext(PostsContext);
    const { postsState, postsDispatch } = postsContext;

    useEffect(() => {
        loadPosts(postsDispatch).then(dispatch => {
            if (isMounted.current) {
                dispatch();
            }
        });

        return () => {
            isMounted.current = false;
        }
    }, [postsDispatch]);

    return (
        <div>
            <h1>posts</h1>
            {postsState.loading && (
                <p>
                    <strong>carregando...</strong>
                </p>
            )}
            {postsState.posts.map((p) => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
  )
}