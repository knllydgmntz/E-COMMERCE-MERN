const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          quos iste vero sapiente sunt earum maxime dolore eos repellat
          assumenda distinctio alias id suscipit molestiae quia, eius quisquam
          numquam voluptatibus. Praesentium accusamus ullam iusto ea voluptatem
          a ratione nulla tenetur nihil distinctio, et repellendus aliquam
          doloremque harum quod, eos voluptates molestiae dolore dolor nam.
          Dolore?
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque
          officiis velit et cum quae.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
