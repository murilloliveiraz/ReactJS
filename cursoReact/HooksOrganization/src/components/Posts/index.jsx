import { useContext, useEffect, useRef } from "react"
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from '../../contexts/PostsProvider/actions'
import { CounterContext } from '../../contexts/CounterProvider/context';

import {
    decrementCounter,
    incrementCounter,
  } from '../../contexts/CounterProvider/actions';

export const Posts = () => {
    const isMounted = useRef(true);

    const postsContext = useContext(PostsContext);
    const { postsState, postsDispatch } = postsContext;
    
    const counterContext = useContext(CounterContext);
    const { counterState, counterDispatch } = counterContext;

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
            <h1>Counter: {counterState.counter}</h1>
            <button onClick={() => incrementCounter(counterDispatch)}>increment</button>
            <button onClick={() => decrementCounter(counterDispatch)}>decrement</button>
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