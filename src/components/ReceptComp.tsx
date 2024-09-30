type Props = {
    myNum: number;
}


export function Recept(num: Props) {
    if (num.myNum >= 2) {
        return (
            <>
                <h2>Kettő személyre:</h2>
                <p>Forraljon fel 2 csésze vizet.</p>
                <p> Adjunk hozzá 2 kanál (tetszőleges) teát és 1 kanál fűszert.</p>
                <p> Adjunk hozzá 1 csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.</p>

            </>

        )

    }
    return (

        <>

            <h2>  Egy összejövetelre</h2>
            <p>Forraljon fel 4 csésze vizet.</p>
            <p> Adjunk hozzá 4 kanál (tetszőleges) teát és 2 kanál fűszert.</p>
            <p>Adjunk hozzá 2 csésze tejet forralni és ízlés szerint cukrot.</p>


        </>



    )
}