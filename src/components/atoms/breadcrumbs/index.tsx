import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "../typography";
import { Box } from "../box";
import { ArrowLeft2 } from "iconsax-react";
import { useCustomNav } from "../../../hook/useNavigate";
interface IProps {
  className?: string;
  links?: { text: string; to?: string; goback?: boolean }[];
  optionalChildren?: JSX.Element;
}

const Breadcrumbs = (props: IProps) => {
  const { links, optionalChildren } = props;

  const navigation = useCustomNav();

  return (
    <nav className="w-full bg-background-50 mx-auto px-2 md:px-4 py-3 mt-1 mb-1 flex justify-between items-center rounded-full">
      <Box className="flex items-center">
        <NavLink to={"/main"} className="text-primary">
          <Typography type="h3" className="text-neutral-600 font-medium">
            صفحه اصلی
          </Typography>
        </NavLink>
        {links?.map((link, index) => {
          return (
            <Fragment key={index}>
              <ArrowLeft2 className="mx-2 text-gray-400" size={20} />
              <Box key={index}>
                {link.to ? (
                  <NavLink to={link.to} className="text-primary">
                    <Typography type="h3" className="font-bold">
                      {link.text}
                    </Typography>
                  </NavLink>
                ) : link.goback ? (
                  <Typography
                    onClick={() => navigation.back()}
                    type="h3"
                    className="font-medium  hover:cursor-pointer text-neutral-600"
                  >
                    {link.text}
                  </Typography>
                ) : (
                  <Typography type="h3" className="text-neutral-600 font-bold">
                    {link.text}
                  </Typography>
                )}
              </Box>
            </Fragment>
          );
        })}
      </Box>
      <Box className="flex flex-row justify-end grow items-center">
        {optionalChildren}
      </Box>
    </nav>
  );
};

export default Breadcrumbs;
