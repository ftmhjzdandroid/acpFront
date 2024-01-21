import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "../typography";
import { Box } from "../box";
import { ArrowLeft2 } from "iconsax-react";
interface IProps {
  className?: string;
  links?: { text: string; to?: string }[];
}

const Breadcrumbs = (props: IProps) => {
  const { links } = props;

  return (
    <nav className="w-full th-bg-card mx-auto px-2 md:px-4 py-3 mt-3 mb-2 flex justify-between items-center rounded-full border border-gray-300 bg-white">
      <Box className="flex items-center">
        <NavLink to={"/"} className="text-primary">
          <Typography type="h4" className="text-gray-500 font-medium">
            صفحه اصلی
          </Typography>
        </NavLink>

        {links?.map((link, index) => {
          return (
            <Fragment key={index}>
              <ArrowLeft2 className="mx-2 text-gray-400" size={20} />
              <Box key={index}>
                {link.to ? (
                  <NavLink to={link.to}>
                    <Typography type="h4" className="text-gray-600 font-semibold">
                      {link.text}
                    </Typography>
                  </NavLink>
                ) : (
                  <Typography type="h4" className="text-gray-600 font-bold">
                    {link.text}
                  </Typography>
                )}
              </Box>
            </Fragment>
          );
        })}
      </Box>
      <Box className="flex items-center">
        <NavLink to={"/"} className="text-primary cursor-pointer">
          <Box className="flex items-center">
            <Typography type="h4" className="text-gray-600 font-semibold">
              بازگشت
            </Typography>
            <ArrowLeft2 className="mx-2 text-gray-600" size={20} />
          </Box>
        </NavLink>
      </Box>
    </nav>
  );
};

export default Breadcrumbs;
