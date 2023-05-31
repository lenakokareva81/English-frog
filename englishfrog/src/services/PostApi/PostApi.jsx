// PostApi
import { useState, useEffect } from 'react';


function PostApi() {
    let user = {
        id: "13373--",
        english: "----",
        transcription: " []",
        russian: "заклинание",
        tags: "гарри поттер"

    };
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Примечание: пустой массив зависимостей[] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch("/api/words/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(response => {//получаем ответ от сервера, в этом then приходит статус ответа

                if (response.ok) { //Проверяем что код ответа 200 если HTTP-статус в диапазоне 200-299
                    // получаем тело ответа (см. про этот метод ниже)
                    return response.json();//получаем json. Он прокинется в следующий then 
                } else {
                    throw new Error('У вас ошибка в функциональном ...');//если нет - код 300, например - создаем новую ошибку, она так же попадет в 
                }
            })
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            })
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div> api<ul>
                {/* {items.map(word => {
                    return <li key={word.id}>{word.english} - {word.russian}</li>
                })} */}
            </ul>
            </div >

        );
    }
}

export default PostApi