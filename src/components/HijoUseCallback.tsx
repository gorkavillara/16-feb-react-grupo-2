import React from "react"

const HijoUseCallback = React.memo(({ saluda }: { saluda: () => void }) => {
    saluda()
    return <div>HijoUseCallback</div>
})

export default HijoUseCallback
