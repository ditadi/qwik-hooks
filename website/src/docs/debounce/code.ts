export default `
import { useDebounce } from "@ditadi/qwik-hooks";

export default component$(() => {
    const inputValue = useSignal("");
    const moviesList = useSignal<{ Search: Movie[] }>({ Search: [] });

    const handlerFetchMovies = $(async () => {
        const movies = await fetchMovies(inputValue.value);
        moviesList.value = movies;
    });

    const { debouncedSignal, isDebouncing } = useDebounce(inputValue, 1000, handlerFetchMovies);

    return (
        <div class="flex flex-col bg-background w-full items-center p-10 gap-5">
            <Input placeholder="Search Movies" class="bg-white" bind:value={inputValue} />
            <Button
                look="secondary"
                size="sm"
                class="font-sans rounded-[10px] h-6 md:h-10 lg:h-10"
                onClick$={() => fetchMovies(debouncedSignal.value)}
            >
                {isDebouncing.value ? (
                    <>
                        <LuLoader class="animate-spin" />
                        Searching...
                    </>
                ) : (
                    <>Search</>
                )}
            </Button>
            <div class="flex flex-col gap-3 h-40  overflow-auto w-full">
                {moviesList.value?.Search?.map((movie) => (
                    <div class="flex gap-1 items-center">
                        <span class="text-white font-bold">{movie.Title as string}</span>
                        <span class="text-white text-sm">{movie.Year as string}</span>
                    </div>
                ))}
            </div>
        </div>
    );
});
`;
