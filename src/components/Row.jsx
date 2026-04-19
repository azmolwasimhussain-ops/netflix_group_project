import '../styles/row.css';

function Row({ title = 'Popular Shows' }) {
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__items">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="row__item">
            <div className="row__item-content">
              <span className="row__item-text">Item {item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
