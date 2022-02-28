import NewsPreview from './NewsPreview';

function Main({ newsList }) {

    return (
        <main className="main">
            {
                newsList.map((item) => <NewsPreview
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    author={item.by}
                    time={item.time}
                    score={item.score}
                />)
            }
        </main>
    );
}

export default Main;