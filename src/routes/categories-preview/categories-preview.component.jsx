import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {selectcategoriesMap} from "../../store/category/category.selector"
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectcategoriesMap)
  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return (
            <CategoryPreview key={key} title={key} products={products} />
            );
      })}
    </>
  );
};

export default CategoriesPreview;
