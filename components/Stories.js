import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react"
import Story from "./Story";

function Stories() {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {

        function createRandomUser() {
            return {
                username: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                password: faker.internet.password(),
                birthdate: faker.date.birthdate(),
                registeredAt: faker.date.past(),
            };
        }

        const users = [...Array(20)].map((_, i) => ({
            ...createRandomUser(),
            id: i,
        }))

        setSuggestions(users)
    }, [])

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
        border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {suggestions.map(profile => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    )
}

export default Stories