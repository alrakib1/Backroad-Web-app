

const Title = ({name,subName}) => {
    return (
        <div className="section-title">
        <h2>
          {name} <span>{subName}</span>
        </h2>
      </div>
    );
};

export default Title;