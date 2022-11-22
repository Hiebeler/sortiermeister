export const Finished = () => {

    const resetAtoms = () => {
        window.location.reload();
    }

    return (
        <div className="flex-col flex">
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <h1 className="text-3xl font-bold underline">Finished</h1>
                </div>
                <div className="basis-1/2">
                    <button onClick={() => resetAtoms()}>Reset</button>
                </div>
            </div>
        </div>
    )
}