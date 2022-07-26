function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="w-16 h-16 only:rounded-full border p-[2px]" src="https://links.papareact.com/jjm" alt="profile" />
            <div >
                <h2 className="font-bold">pulessss</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign out</button>
        </div>
    )
}

export default MiniProfile