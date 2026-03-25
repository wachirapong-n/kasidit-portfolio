import Container from "./container";

export default function Navbar() {
  return (
    <Container className="bg-red-200">
      <div className="flex w-full gap-5 ">
        <div className="">logo</div>
        <div>Kasidit</div>
      </div>
      <div className="flex w-full gap-5">
        <div>Home</div>
        <div>รางวัล</div>
      </div>
    </Container>
  );
}
