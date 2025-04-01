const isAdmin = ( userId: string ) => {
    return userId === process.env.NEXT_PUBLIC_ADMIN || userId === process.env.NEXT_PUBLIC_ADMIN2;
}

export default isAdmin;