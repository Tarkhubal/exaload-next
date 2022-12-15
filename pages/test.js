import React from 'react';
import { useRouter } from 'next/router';

const ItemList = (props) => {
    const { items } = props;
    const router = useRouter();

    function handleClick(id) {
        router.push(`/items/${id}`);
    }

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} onClick={() => handleClick(item.id)}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </li>
            ))}
        </ul>
    );
};

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/data/items.json');
    const items = await res.json();

    return {
        props: {
            items,
        },
    };
}

export default ItemList;