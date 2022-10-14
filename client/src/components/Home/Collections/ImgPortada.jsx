import { StyledImageDetails, StyledImage } from "./styledComponents";
import manLeft from "../../../assets/images/banner/manLeft.jpeg"
import womanRight from "../../../assets/images/banner/womanRight.jpeg"
import { Image } from "@chakra-ui/react"

function ImgPortada() {
    return (
        <>
          <StyledImage
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.35 }}
          >
            <Image
              src={manLeft}
              alt="woman's collection"
              width={500}
              height={500}
            ></Image>
            <StyledImageDetails>
              <p>(01)</p>
              <p>MAN</p>
            </StyledImageDetails>
          </StyledImage>
          <StyledImage
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.35, delay: 0.25 }}
          >
            <Image
              src={womanRight}
              alt="men's collection"
              width={500}
              height={500}
            />
            <StyledImageDetails>
              <p>(02)</p>
              <p>WMNS</p>
            </StyledImageDetails>
          </StyledImage>
        </>
      );
}

export default ImgPortada