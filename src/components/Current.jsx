const Current = ({theme})=>{
    return (
        <div className="text-amber-50 bg-[#111111] flex flex-col justify-between py-6 px-6 border  rounded-lg">
            <div>
                <h2>Now</h2>
                <span style={{color: theme}} className="text-sm">what's that?</span>
            </div>
            <p className="text-sm">waiting for onboarding</p>
        </div>
    )
}

export default Current