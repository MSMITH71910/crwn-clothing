import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  DirectoryItemLink,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, size } = category;

  return (
    <DirectoryItemLink to={`/shop/${title}`} size={size}>
      <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    </DirectoryItemLink>
  );
};

export default DirectoryItem;
