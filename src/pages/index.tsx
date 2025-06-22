export default function Home() {
  return (
    <>
      <div className="absolute top-0 right-0">
        <Button type="button" onClick={() => open({ state: 'creating' })}>
          機械を登録する
        </Button>
      </div>
    </>
  );
}
