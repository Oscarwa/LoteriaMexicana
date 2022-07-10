import { useEffect, useState } from 'react'

const useImage = (cardNumber: number) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../img/${cardNumber + 1}.PNG`);
                setImage(response.default)
            } catch (err: any) {
                console.error(err);
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [cardNumber])

    return {
        loading,
        error,
        image,
    }
}

export default useImage