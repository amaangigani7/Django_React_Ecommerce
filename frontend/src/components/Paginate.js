import React from "react";
import { Pagination } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Paginate = (props) => {
  const history = useHistory();
  let keyword = props.keyword;
  // if (props.isAdmin) {
  //   console.log(props.pages, props.isAdmin, keyword);
  // }
  if (props.keyword) {
    keyword = props.keyword.split("?keyword=")[1].split("&")[0];
  } else {
    keyword = "";
  }

  return (
    props.pages > 1 && (
      <Pagination>
        {[...Array(props.pages).keys()].map((x) => (
          <Pagination.Item
            key={x}
            active={x + 1 === props.page}
            onClick={(e) =>
              history.push(
                !props.isAdmin
                  ? `/?keyword=${keyword}&page=${x + 1}`
                  : `/admin/products/?keyword=${keyword}&page=${x + 1}`
              )
            }
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
