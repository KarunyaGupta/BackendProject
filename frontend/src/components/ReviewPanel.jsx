const ReviewPanel = ({ review }) => {
  if (!review) return null;

  return (
    <div className="review-panel">
      <h3>Analysis Results</h3>
      <div className="review-content">
        {review}
      </div>
    </div>
  );
};

export default ReviewPanel;
